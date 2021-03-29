const {Router} = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const {check,validationResult}=require('express-validator')
const User = require('../models/Users')
const router = Router()

router.post(
    '/register',
    [
      check('email','Некорректный email').isEmail(),
      check('password','Некорректный пароль')
          .isLength({min:6})
    ],
    async (req,res)=> {
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({
                errors:errors.array(),
                message:'Некорректные данные'
            })
        }

        const {email,password} = req.body

        const candidate =  await User.findOne({email})
        if(candidate) {
           return  res.status(400).json({message:'Exsists'})
        }
        const hashpw = await bcrypt.hash(password,12)
        const  user = new User({email,password:hashpw})
        await  user.save()
        res.status(201).json({message:'Пользователь создан'})

    } catch (e){
        res.status(500).json({message:'error :('})
    }
})
router.post('/login',
    [
        check('email','Введите емэил').normalizeEmail().isEmail(),
        check('password','Введите пароль').exists()
    ],
    async (req,res)=> {
        try {
            const errors = validationResult(req)

            if(!errors.isEmpty()){
                return res.status(400).json({
                    errors:errors.array(),
                    message:'Некорректные данные'
                })
            }
            const {email,password} = req.body
           const user = await User.findOne({email})
            if(!user){
                return res.status(400).json({message:"Пользователь не надйен"})
            }
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch){
                return  res.status(400).json({message:'Неверный пароль'})
            }

            const token = jwt.sign(
                { userID:user.id },
                config.get('jwtSecret'),
                {expiresIn: '1h'}
            )

            res.json({token , userID:user.id})

        } catch (e){
            res.status(500).json({message:'error :('})
        }
})

module.exports = router