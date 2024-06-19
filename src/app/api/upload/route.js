import { uploadFile } from "@/lib/uploadFile";
import { nanoid } from "nanoid";
// import {prisma} from "@/utils/prisma"

export async function POST(req) {
  // form data bisa menerima file
  const formData = await req.formData();
  const file = formData.get("file");
  const author = formData.get("author");

  const id = nanoid(); // menggunakan id random dari nanoid sebagai nama folder

  // upload
  await uploadFile({ key: file.name, folder: id, body: file });

  // insert to DB

  //   await prisma.file.create({
  //     data: {
  //       id,
  //       key: file.name,
  //       author,
  //     },
  //   });

  return Response.json({ message: "Upload Success" });
}
