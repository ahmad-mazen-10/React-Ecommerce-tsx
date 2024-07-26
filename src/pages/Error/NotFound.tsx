import { Container } from "react-bootstrap";
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import "./styleError.css";
import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/Header/Header";

function NotFound() {
  const error = useRouteError();
  let errorStatus: number;
  let errorStatusText: string;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorStatusText = "Not Found";
  }

  return (
    <>
      <Header />

      <Container className="container-error">
        <div className="text">
          <h1 className="error">{errorStatus}</h1>
          <p> Your visited page {errorStatusText}. You may go home page.</p>
        </div>

        <Link to="/" replace={true} className="btn-back">
          Back to home page
        </Link>
      </Container>

      <Footer />
    </>
  );
}

export default NotFound;
