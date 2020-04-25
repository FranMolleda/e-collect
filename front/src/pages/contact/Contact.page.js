import React from "react";
import { Container } from "react-bootstrap";
import { Buttons, Icon } from "react-materialize";

export class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      submitted: true,
    });
  }
  render() {
    if (this.state.submitted) {
      return (
        <Container className="form-container">
          <h1 className="form-container">
            Gracias por ponerse en contacto con nosotros, atenderemos su
            sosicitud y tendrá pronta respuesta.
          </h1>
        </Container>
      );
    } else {
      return (
        <Container className="form-container">
          <form action="send_mail" method="post">
            {/*id='contact-form' onClick={document.forms['contact-form'].submit('send_mail')}>*/}
            <div>
              <input type="email" name="email" required></input>
              <label htmlFor="email">Email</label>
            </div>
            <p></p>
            <div>
              <textarea type="text" name="message" required></textarea>
              <label htmlFor="message">Escriba su mensaje</label>
            </div>
            <div>
              <p className="center-align">
                <Button
                  onClick={this.handleClick}
                  className="button-no-green"
                  waves-effect="true"
                  waves-teal="true"
                  flat
                  type="submit"
                >
                  enviar<Icon right>send</Icon>
                </Button>
              </p>{" "}
            </div>
          </form>
        </Container>
      );
    }
  }
}

/*
let form = document.createElement('contact-form');
form.action = 'send_mail';
form.method = 'POST';

document.body.append(form);

form.submit();
*/
