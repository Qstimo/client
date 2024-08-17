import Field from "@/components/ui/field/Field";
import { IAuthFormData } from "@/types/auth.interface";
import { FC } from "react";
import { Control } from "react-hook-form";
import { View } from "react-native";
import { validEmail } from "./email.regex";

interface IAuthFields {
    control: Control<IAuthFormData>
}
const AuthFields: FC<IAuthFields> = ({ control }) => {
    return (
        <>
            <Field<IAuthFormData>
                placeholder="Enter email"
                control={control}
                name="email"
                rules={{
                    required: 'Email is required',
                    pattern: {
                        value: validEmail,
                        message: 'Please enter a valid email address'
                    }
                }}
                keyboardType="email-address"
            />

            <Field<IAuthFormData>
                placeholder="Enter password"
                control={control}
                name="password"
                secureTextEntry
                rules={{
                    required: 'Password is required',
                    minLength: {
                        value: 6,
                        message: 'Please enter a valid password'
                    }
                }}
            />

        </>
    )
}

export default AuthFields