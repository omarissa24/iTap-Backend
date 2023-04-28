import User from '../models/User.js';

/* Get User Profile */

export const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            bio: user.bio,
            website: user.website,
            location: user.location,
            phoneNumber: user.phoneNumber,
            facebook: user.facebook,
            twitter: user.twitter,
            instagram: user.instagram,
            youtube: user.youtube,
            snapchat: user.snapchat,
            paypal: user.paypal,
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

/* Update User Profile */

export const updateUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user._id.toString() === req.user.id.toString()) {
            user.firstName = req.body.firstName || user.firstName;
            user.lastName = req.body.lastName || user.lastName;
            user.email = req.body.email || user.email;
            user.bio = req.body.bio || user.bio;
            user.website = req.body.website || user.website;
            user.location = req.body.location || user.location;
            user.phoneNumber = req.body.phoneNumber || user.phoneNumber;
            user.facebook = req.body.facebook || user.facebook;
            user.twitter = req.body.twitter || user.twitter;
            user.instagram = req.body.instagram || user.instagram;
            user.youtube = req.body.youtube || user.youtube;
            user.snapchat = req.body.snapchat || user.snapchat;
            user.paypal = req.body.paypal || user.paypal;
            const updatedUser = await user.save();
            res.status(200).json({
                firstName: updatedUser.firstName,
                lastName: updatedUser.lastName,
                email: updatedUser.email,
                bio: updatedUser.bio,
                website: updatedUser.website,
                location: updatedUser.location,
                phoneNumber: updatedUser.phoneNumber,
                facebook: updatedUser.facebook,
                twitter: updatedUser.twitter,
                instagram: updatedUser.instagram,
                youtube: updatedUser.youtube,
                snapchat: updatedUser.snapchat,
                paypal: updatedUser.paypal,
            });
        } else {
            res.status(401).json({ message: 'Not Authorized' });
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}