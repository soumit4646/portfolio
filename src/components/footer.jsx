export default function () {
    const date = new Date();
    return <div className="footer text-center py-5 mt-40">
        &copy; Soumit Satiar {date.getFullYear()}
    </div>
}