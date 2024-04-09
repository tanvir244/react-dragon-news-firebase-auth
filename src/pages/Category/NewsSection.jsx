import News from "./News";

const NewsSection = ({ expectedCategory }) => {

    console.log(expectedCategory);
    return (
        <div className="grid grid-cols-3 gap-4">
            {
                expectedCategory.map(singleNews => <News
                    key={singleNews.id}
                    singleNews={singleNews}
                ></News>)
            }
        </div>
    );
};

export default NewsSection;