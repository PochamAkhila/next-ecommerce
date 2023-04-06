export default function ProductId({params}: {
    params: {
        productId: any;
    }
}) {
    return (
        <>
            I am from ProductId page{params.productId}
        </>
    )
}