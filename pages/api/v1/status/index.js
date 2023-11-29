function status(request, response) {
  response.status(200).json({ status: "API OK" });
}

export default status;
