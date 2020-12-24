import { IUser } from "src/app/shared/models/user.interface";

export interface IAuth {
    SignIn: {
        token: string;
        user: IUser;
    }
}