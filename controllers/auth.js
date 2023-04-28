import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User.js';

/* Register User */

export const register = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            bio,
            website,
            location,
            phoneNumber,
            facebook,
            twitter,
            instagram,
            youtube,
            snapchat,
            paypal,
        } = req.body;

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            bio,
            website,
            location,
            phoneNumber,
            facebook,
            twitter,
            instagram,
            youtube,
            snapchat,
            paypal,
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

/* Login User */

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        delete user.password;

        req.user = user;
        res.status(200).json({ result: user, token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};