import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import Container from "../components/Container";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { createQuery } from './../features/contact/contactSlice';

const contactSchema = yup.object({
  name: yup.string().required("Name is Required"),
  email: yup
    .string()
    .nullable()
    .email("Email should be valid")
    .required("email is Required"),
  mobile: yup
    .string()
    .default("")
    .nullable()
    .required("Mobile Number is Required"),
  comment: yup.string().default("").nullable().required("Comment is Required"),
});
const Contact = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      email: "",
      comment: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      dispatch(createQuery(values));
    },
  });
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7868.240199397731!2d1.1806345!3d9.5849149!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102b8b4f5aebb70f%3A0xd208f5a1840f7c6c!2sLama%20poude!5e0!3m2!1sfr!2stg!4v1683820850382!5m2!1sfr!2stg"
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="" onSubmit={formik.handleSubmit} className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                      onChange={formik.handleChange("name")}
                      onBlur={formik.handleBlur("name")}
                      value={formik.values.name}
                    />
                    <div className="errors">
                      {formik.touched.name && formik.errors.name}
                    </div>
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur("email")}
                      value={formik.values.email}
                    />
                    <div className="errors">
                      {formik.touched.name && formik.errors.name}
                    </div>
                  </div>
                  <div>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Mobile"
                      name="mobile"
                      onChange={formik.handleChange("mobile")}
                      onBlur={formik.handleBlur("mobile")}
                      value={formik.values.mobile}
                    />
                    <div className="errors">
                      {formik.touched.mobile && formik.errors.mobile}
                    </div>
                  </div>
                  <div>
                    <textarea
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                      name="comment"
                      onChange={formik.handleChange("comment")}
                      onBlur={formik.handleBlur("comment")}
                      value={formik.values.comment}
                    ></textarea>
                    <div className="errors">
                      {formik.touched.comment && formik.errors.comment}
                    </div>
                  </div>
                  <div>
                    <button className="button border-0" type="submit">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get in touch with us </h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-align-items-center">
                      <AiOutlineHome className="fs-5" />
                      <address className="mb-0">
                        Togo, Kara, Village Lama, Qt Lama-Poudè
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-align-items-center">
                      <BiPhoneCall className="fs-5" />
                      <a href="tel:+228 70521112">+228 70521112</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-align-items-center">
                      <AiOutlineMail className="fs-5" />
                      <a href="mailto: mydev847@gmail.com">
                        mydev847@gmail.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-align-items-center">
                      <BiInfoCircle className="fs-5" />
                      <p className="mb-0">Monday - Friday 10 AM - 8PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;