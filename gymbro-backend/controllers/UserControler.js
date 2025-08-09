import User from "../models/User.js";

export const NewUser = async(req, res) =>{
    try{
        const {uid, email} = req.firebaseUser;
        const existingUser = await User.findOne({userId: uid});
        if(existingUser){
            return res.status(200).json({
                mensaje: "user is already registered ",
                user: { uid, email },
            })
        }
        const newUser = new User({
            userId: uid,
            userEmail: email,
        });
        await newUser.save()

        res.status(200).json({
            mensaje: "User created successfully",
            user: {uid, email}
        });

    }catch(err){
        console.error("Error saving user:", err);
        res.status(500).json({ error: "Error saving user"})
    }
}