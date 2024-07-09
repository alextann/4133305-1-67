export function GET(request, { params }) {
  return Response.json({
    name: "Puthita",
    major: "IT",
    lv: "3",
    id: params.id
  });
}
