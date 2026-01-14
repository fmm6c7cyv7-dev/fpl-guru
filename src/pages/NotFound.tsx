import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
        <p className="text-muted-foreground mb-4">Sidan hittades inte</p>
        <Link to="/" className="text-primary underline">
          Gå till startsidan
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
