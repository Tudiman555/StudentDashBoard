import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { User } from "../../Api";
import ProfileInput from "../../components/Input/ProfileInput";
import ProfileSectionCard from "../../components/ProfileSectionCard";
import * as yupp from "yup";
import Button from "../../components/Button/Button";
import Avatar from "../../components/Avatar/Avatar";

interface Props {
  data: User;
}

let user: User = {
  id: 0,
  first_name: "Tushar",
  middle_name: "Kumar",
  last_name: "Agarwal",
  role: "staff",
  birth_date: "22",
  birth_month: "11",
  birth_year: "2000",
  profile_pic_url: "",
};

const Profile: React.FC<Props> = (props) => {
  const [userDetails, setUserDetails] = useState({date_of_birth : user.birth_date +"-"+ user.birth_month +"-"+ user.birth_year,...user});

  console.log(userDetails);
  const resetDetails = () => {
    setValues(userDetails);
  };

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
    touched,
    values,
    setValues,
    isSubmitting,
    errors,
  } = useFormik({
    initialValues: {...userDetails},
    validationSchema: yupp.object().shape({
      first_name: yupp.string().required("This Field is Required").min(3),
      last_name: yupp.string().required().min(3),
      date_of_birth : yupp.date(),
      role: yupp
        .string()
        .matches(/staff|admin/, "Role can either be 'staff' or 'admin '"),
    }),
    onSubmit: (data) => {},
  });
  return (
    <>
      <div className="relative flex flex-col w-10/12 px-4 mt-4">
        <ProfileSectionCard sectionTitle="General Information">
          <form>
            <div className="flex flex-col md:flex-row">
              <div className="flex-grow w-4/12">
                <Avatar size={"Large"} shape="Sqaure"></Avatar>
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
                <div className="flex space-x-3">
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
                  <div className="w-full">
                    <label
                      htmlFor={values.date_of_birth}
                      className="block mb-2 text-sm text-gray-500"
                    >
                      Date Of Birth
                    </label>
                    <div className="flex space-x-1">
                      <select
                        id={values.date_of_birth}
                        name="birth_date"
                        className={
                          "p-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none " +
                          (errors.date_of_birth && touched.date_of_birth
                            ? "border-red-600 focus:border-red-600 mb-2"
                            : "mb-6 focus:border-indigo-600 ")
                        }
                        value={values.birth_date}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option>Day</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>
                        <option>27</option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                        <option>31</option>
                      </select>
                      <select
                        id={values.date_of_birth}
                        name={"birth_month"}
                        className={
                          "p-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none " +
                          (errors.date_of_birth && touched.date_of_birth
                            ? "border-red-600 focus:border-red-600 mb-2"
                            : "mb-6 focus:border-indigo-600 ")
                        }
                        value={values.birth_month}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option>Month</option>
                        <option>Jan</option>
                        <option>Feb</option>
                        <option>Mar</option>
                        <option>Apr</option>
                        <option>May</option>
                        <option>Jun</option>
                        <option>Jul</option>
                        <option>Aug</option>
                        <option>Sep</option>
                        <option>Oct</option>
                        <option>Nov</option>
                        <option>Dec</option>
                      </select>
                      <select
                        id={values.date_of_birth}
                        name={"birth_year"}
                        className={
                          "p-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none " +
                          (errors.date_of_birth && touched.date_of_birth
                            ? "border-red-600 focus:border-red-600 mb-2"
                            : "mb-6 focus:border-indigo-600 ")
                        }
                        value={values.birth_year}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option>Year</option>
                        <option>2018</option>
                        <option>2017</option>
                        <option>2016</option>
                        <option>2015</option>
                        <option>2014</option>
                        <option>2013</option>
                        <option>2012</option>
                        <option>2011</option>
                        <option>2010</option>
                        <option>2009</option>
                        <option>2008</option>
                        <option>2007</option>
                        <option>2006</option>
                        <option>2005</option>
                        <option>2004</option>
                        <option>2003</option>
                        <option>2002</option>
                        <option>2001</option>
                        <option>2000</option>
                        <option>1999</option>
                        <option>1998</option>
                        <option>1997</option>
                        <option>1996</option>
                        <option>1995</option>
                        <option>1994</option>
                        <option>1993</option>
                        <option>1992</option>
                        <option>1991</option>
                        <option>1990</option>
                        <option>1989</option>
                        <option>1988</option>
                        <option>1987</option>
                        <option>1986</option>
                        <option>1985</option>
                        <option>1984</option>
                        <option>1983</option>
                        <option>1982</option>
                        <option>1981</option>
                        <option>1980</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </ProfileSectionCard>
        <ProfileSectionCard sectionTitle="Education"></ProfileSectionCard>
        <div className="px-4">
          <div className="fixed bottom-0 right-0 flex items-center justify-between w-10/12 h-20 px-4 bg-gray-900 rounded-lg">
            <Button
              title="Reset ALL"
              type="reset"
              theme="Primary"
              onClick={resetDetails}
              disabled={values === userDetails}
            />
            <Button
              title="Save Changes"
              theme="Success"
              type="button"
              onClick={() => {
                setUserDetails(values);
              }}
              disabled={!isValid || values === userDetails}
            />
          </div>
        </div>
      </div>
    </>
  );
};

Profile.defaultProps = {};
export default Profile;
function useFormic(): {} {
  throw new Error("Function not implemented.");
}
function yup() {
  throw new Error("Function not implemented.");
}
