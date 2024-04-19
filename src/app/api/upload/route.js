import uniqid from "uniqid";
import { UploadThing } from "uploadthing";

export async function POST(req) {
    const data = await req.formData();
    if (data.get("file")) {
        // upload the file
        const file = data.get("file");

        const uploadThing = new UploadThing({
            apiKey: process.env.UPLOADTHING_SECRET,
        });

        const ext = file.name.split(".").slice(-1)[0];
        const newFileName = uniqid() + "." + ext;

        const chunks = [];
        for await (const chunk of file.stream()) {
            chunks.push(chunk);
        }
        const buffer = Buffer.concat(chunks);

        const result = await uploadThing.upload({
            file: buffer,
            filename: newFileName,
        });

        const link = result.fileUrl;
        return Response.json(link);
    }
    return Response.json(true);
}
