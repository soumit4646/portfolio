export default function () {
    const date = new Date();
    return (
        <div className="footer text-center py-5">
            &copy; {date.getFullYear()} Soumit Satiar. All rights reserved.
        </div>
    );
}
