
const News = ({ singleNews }) => {
    const { title } = singleNews;
    const { src } = singleNews.image.model.blocks;
    console.log(singleNews)
    return (
            <div className="p-2 shadow-2xl border">
                <img src={src} alt="" />
                <h2 className="font-semibold">{title}</h2>
            </div>
    );
};

export default News;