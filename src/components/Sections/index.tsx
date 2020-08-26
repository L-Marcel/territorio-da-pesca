import React from 'react';
import { SimpleContentPage } from '../../json/language/interface';

interface SectionsProps {
    content: SimpleContentPage;
}

const Sections: React.FC<SectionsProps> = ({ content }) => {
    const Page = content.map(function(item, index){
        const bgColor = (index % 2 === 0)? "":"section-bg";
        switch(item?.type){
            case("Text"):
                return(
                    <section key={index} className={bgColor}>
                        <div className="container aos-init aos-animate" data-aos="fade-up">
                            <div className="section-title">
                                <h2>{item.title}</h2>
                                <p>{item.subtitle}</p>
                            </div>
                        </div>
                    </section>
                );
            case("Images"):
                return(
                    <section key={index} className={bgColor}>
                        <div className="container aos-init aos-animate" data-aos="fade-up">
                            <div className="container aos-init aos-animate" data-aos="fade-up">
                                <div className="section-title">
                                    <h2>{item.title}</h2>
                                    <p>{item.subtitle}</p>
                                </div>
                            </div>
                            <div className="row portfolio aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                { item.images.map(function(item, index) {
                                    return(
                                        <div className={`col-lg-4 col-md-6 portfolio-item filter-${item.filter}`}>
                                            <div className="portfolio-wrap">
                                            <img src={item.src} className="img-fluid" alt=""/>
                                            <div className="portfolio-info">
                                                <h4>{item.title}</h4>
                                                <p>{item.filter}</p>
                                                <div className="portfolio-links">
                                                    <a href={item.src} data-gall="portfolioGallery" className="venobox vbox-item"><i className="bx bx-plus"></i></a>
                                                    <a href="#" title="More Details"><i className="bx bx-link"></i></a>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                );
            default:
                console.log(null);
                return(null);
        };
    });

    return(<>
        {Page}
    </>);
};

export default Sections;