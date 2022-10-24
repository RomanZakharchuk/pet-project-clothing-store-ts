import { FC } from "react";

import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/';

const SingIn: FC = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef =  createUserDocumentFromAuth(user);
    };

    return (
        <div>
            Sign in
            <button onClick={logGoogleUser}>Sing in</button>
        </div>
    );
};

export { SingIn };