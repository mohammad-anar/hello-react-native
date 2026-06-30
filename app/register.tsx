import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import {
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .required("Email is required")
      .email("Should be a valid email"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must at least 6 character"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")])
      .required("Password is required"),
  })
  .required();

const Register = () => {
  const {
    control,
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data:any) => {
    console.log(data);
    reset();
  };
  return (
    <View className="p-5">
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="border rounded-lg px-3 border-gray-400 mb-5"
            placeholder="Enter name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="name"
      />
      {errors.name && <Text>Name is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="border rounded-lg px-3 border-gray-400 mb-5"
            placeholder="Enter email"
            onBlur={onBlur}
            onChangeText={onChange}
            keyboardType="email-address"
            autoCapitalize="none"
            value={value}
          />
        )}
        name="email"
      />
      {errors.email && <Text>Email is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="border rounded-lg px-3 border-gray-400 mb-5"
            placeholder="Enter password"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      {errors.password && <Text>Password is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="border rounded-lg px-3 border-gray-400 mb-5"
            placeholder="Confirm Password"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="confirmPassword"
      />
      {errors.confirmPassword && <Text>Confirm Password is required.</Text>}

      <TouchableOpacity
        className="bg-green-600 text-white rounded-lg p-3 px-6  mx-auto"
        onPress={handleSubmit(onSubmit)}
      >
        <Text className="text-xl font-bold text-white text-center">
          Register
        </Text>
      </TouchableOpacity>

      {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
    </View>
  );
};

export default Register;
