import Calendar from "@/features/Calendar";

function Events() {
    return (
        <section className="page-news">
            <div className="container">
                <h2 className="news__heading section-heading">
                    SỰ KIỆN DÒNG HỌ
                </h2>
                <Calendar />
            </div>
        </section>
    );
}

export default Events;