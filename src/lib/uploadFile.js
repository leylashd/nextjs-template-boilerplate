import { s3Client } from "@/utils/aws";
import { PutObjectCommand } from "@aws-sdk/client-s3";

export async function uploadFile({ key, folder, body }) {
  // key : nama file, folder: folder di object storage, body : filenya
  // 1. Siapin file sesuai format yang diminta oleh AWS/R2
  const bytes = await body.arrayBuffer();
  const buffer = Buffer.from(bytes); // buffer : wadah buat kirim body

  // 2. Send Command (Command untuk upload file)
  try {
    await s3Client.send(
      new PutObjectCommand({
        Bucket: "leyla-pixelpioneers",
        Key: `${folder}/${key}`,
        ContentType: body.type,
        Body: buffer,
      })
    );
    console.log("upload ok");
  } catch (error) {
    console.log(error);
  }
}
