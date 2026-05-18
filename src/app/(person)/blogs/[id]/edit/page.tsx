export default async function Page({
    params
}: {
    params: Promise<{ oid: string }>;
}) {
    const { oid } = await params;
    return (
        <div>Edits Blogs with OID: {oid}</div>
    );
}