export default function () {
    const date = new Date();
    return (
        <div className="footer text-center py-5">
            &copy; Soumit Satiar {date.getFullYear()}
        </div>
    );
}
