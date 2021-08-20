import { useFormik } from "formik";
import React from "react";
import ProfileInput from "../../components/Input/ProfileInput";
import ProfileSectionCard from "../../components/ProfileSectionCard";
import * as yupp from "yup";
import Button from "../../components/Button/Button";
import Avatar from "../../components/Avatar/Avatar";
import { useAppSelector } from "../../Store";
import { memo } from "react";
import { meSelector } from "../../selectors/auth.selectors";
import axios from "axios";
import { User } from "../../modals/User";
interface Props {}

const Profile: React.FC<Props> = (props) => {
  const userDetails = useAppSelector(meSelector) as User;
  console.log(userDetails)
  const resetDetails = () => {
    setValues({ ...userDetails });
  };

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    values,
    setValues,
    errors,
  } = useFormik({
    initialValues: { ...userDetails },
    validationSchema: yupp.object().shape({
      first_name: yupp.string().required("This Field is Required").min(3),
      last_name: yupp.string().required().min(3),
      role: yupp
        .string()
        .required()
        .matches(/staff|admin/, "Role can either be 'staff' or 'admin '"),
    }),
    onSubmit: (data) => {
      const  url = "https://api-dev.domecompass.com/me"
      const obj = { "first_name" : data.first_name , "last_name" : data.last_name , "profile_pic_url": ""}
      console.log(data)
      console.log(obj)
      axios.put(url,{...obj})
    },
  });
  return (
    <>
      <div className="relative flex flex-col w-full px-4 mt-4">
        <ProfileSectionCard sectionTitle="General Information">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row">
              <div className="flex-grow w-4/12">
                <Avatar size={"Large"} shape="Sqaure" imageUrl={values.profile_pic_url}></Avatar>
              </div>
              <div className="w-8/12">
                <div className="flex flex-wrap md:space-x-3 md:flex-nowrap ">
                  <ProfileInput
                    type="text"
                    name="first_name"
                    id="first_name"
                    placeholder="First Name"
                    autoComplete="first_name"
                    value={values.first_name}
                    onChange={handleChange}
                    error={errors.first_name}
                    onBlur={handleBlur}
                    touched={touched.first_name}
                  />
                  <ProfileInput
                    type="text"
                    name="last_name"
                    id="last_name"
                    placeholder="Last Name"
                    autoComplete="lasr_name"
                    value={values.last_name}
                    onChange={handleChange}
                    error={errors.last_name}
                    onBlur={handleBlur}
                    touched={touched.last_name}
                  />
                </div>
                <div className="flex flex-wrap md:space-x-3 md:flex-nowrap ">
                  <ProfileInput
                    type="text"
                    name="role"
                    id="role"
                    placeholder="Role"
                    autoComplete="role"
                    value={values.role}
                    onChange={handleChange}
                    error={errors.role}
                    onBlur={handleBlur}
                    touched={touched.role}
                  />
                </div>
              </div>
            </div>
            <div className="px-4">
              <div className="fixed bottom-0 right-0 flex items-center justify-between w-10/12 h-20 px-4 bg-gray-900 rounded-lg">
                <Button
                  title="Reset ALL"
                  type="button"
                  theme="Primary"
                  onClick={resetDetails}
                  disabled={values === userDetails}
                />
                <Button
                  title="Save Changes"
                  theme="Success"
                  type="submit"
                  disabled={false}
                />
              </div>
            </div>
          </form>
        </ProfileSectionCard>
        <ProfileSectionCard sectionTitle="Education"></ProfileSectionCard>

      </div>
    </>
  );
};

Profile.defaultProps = {};
export default memo(Profile);
