import React from 'react';
import {
    Grid,
    Row,
    Col,
    Button,
    FormGroup,
    ControlLabel,
    FormControl
} from 'react-bootstrap'
import { Formik } from 'formik';
import Yup from 'yup';
import './Request.css'

const Request = () => {
    return(
            <div className="app">
                <EnhancedForm />
            </div>
    )
}

const MyInnerForm = props => {
    const {
        values,
        touched,
        errors,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
    } = props

    return (
        <form>
          <Grid>
            <Row className="show-grid">
              <Col xs={12}
                   md={12}
                   >
                <h1 className="heading">
                  Request
                </h1>
              </Col>
              <Col xs={12}
                   md={12}
                   >
                <p className="explain">
                  If you have a favorite jazzman,<br />
                  request to add him or her as Jazz Giant to this list!<br />
                  However, you should explain why he or she is a <strong>true</strong> Jazz Giant.
                </p>
              </Col>
              <Col xs={12}
                   md={12}
                   ><p className="caution">
                  (!!<strong>Caution</strong> You Can Not Yet Request, Because This Page Is Trial Application!!)
                </p>
              </Col>

              <Col xs={12}
                   md={12}
                   >
                <FormGroup
                   controlId="formBasicText">
                  <ControlLabel htmlFor="userName">
                    User Name
                  </ControlLabel>
                  <FormControl
                     id="userName"
                     type="text"
                     value={values.userName}
                     placeholder="Your User Name"
                     onChange={handleChange}
                     onBlur={handleBlur}
                     className={
                         errors.userName && touched.userName
                             ? 'text-input error'
                             : 'text-input'
                     }
                     />
                  {errors.userName &&
                      touched.userName &&
                      <div className="input-feedback">
                            {errors.userName}
                      </div>}
                      <FormControl.Feedback />
                </FormGroup>
              </Col>

              <Col xs={12}
                   md={12}
                   >
                <FormGroup
                   controlId="formBasicText">
                  <ControlLabel htmlFor="email">
                    Email(Option)
                  </ControlLabel>
                  <FormControl
                     id="email"
                     type="text"
                     value={values.email}
                     placeholder="Your Email Address"
                     onChange={handleChange}
                     onBlur={handleBlur}
                     className={
                         errors.email && touched.email
                             ? 'text-input error'
                     : 'text-input'}/>
                  {errors.email &&
                      touched.email &&
                      <div className="input-feedback">
                            {errors.email}
                      </div>}
                      <FormControl.Feedback />
                </FormGroup>
              </Col>

              <Col xs={12} md={12}><FormGroup
                                      controlId="formBasicText">
                  <ControlLabel htmlFor="jazzman">
                    Jazzman
                  </ControlLabel>
                  <FormControl
                     id="jazzman"
                     type="text"
                     value={values.jazzman}
                     placeholder="Your Favorite Jazzman"
                     onChange={handleChange}
                     onBlur={handleBlur}
                     className={
                         errors.jazzman && touched.jazzman
                             ? 'text-input error'
                     : 'text-input'}/>
                  {errors.jazzman &&
                      touched.jazzman &&
                      <div className="input-feedback">
                            {errors.jazzman}
                      </div>}
                      <FormControl.Feedback />
              </FormGroup></Col>

              <Col xs={12}
                   md={12}>
                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel htmlFor="reason">
                    Reason
                  </ControlLabel>
                  <FormControl
                     id="reason"
                     type="text"
                     value={values.reason}
                     placeholder="Why are you thinking he or she is a jazzman?"
                     onChange={handleChange}
                     onBlur={handleBlur}
                     className={
                         errors.reason && touched.reason
                             ? 'text-input error'
                     : 'text-input'}
                     componentClass="textarea" />
                      {errors.reason &&
                      touched.reason &&
                      <div className="input-feedback">
                            {errors.reason}
                      </div>}
                      <FormControl.Feedback />
                </FormGroup>
              </Col>

              <Col className="button-block" xs={12} md={12}>
                <Button bsSize="large"
                        bsStyle="success"
                        onClick={handleSubmit}
                        disabled={isSubmitting}>
                  Submit
                </Button>
                <Button bsSize="large"
                        bsStyle="success"
                        className="outline"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}>
                  Reset
              </Button></Col>
            </Row>
          </Grid>
        </form>
    );
};


const EnhancedForm = Formik({
    mapPropsToValues: () => ({ email: '', userName: '', reason: '', jazzman: '' }),
    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email('Invalid email address'),
        userName: Yup.string()
            .max(30, "Your name is too long!")
            .required('User name is required.'),
        reason: Yup.string()
            .min(10, "Please explain in detail!")
            .max(140, "I've had enough of your words!")
            .required('You should explain why your jazzman is Jazz Giant!'),
        jazzman: Yup.string()
            .max(30, "Is it really someone's name?")
            .required('Jazzman name is required.'),
    }),
    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },
    displayName: 'BasicForm', // helps with React DevTools
})(MyInnerForm);

export default Request
