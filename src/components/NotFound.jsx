function NotFound() {
  return (
    <div className="text-center py-20">
      <h2 className="text-4xl font-bold mb-4 text-red-600">404</h2>
      <p className="text-xl mb-4">Page Not Found</p>
      <a href="/" className="text-blue-500 hover:underline">Go back to Home</a>
    </div>
  );
}

export default NotFound;
