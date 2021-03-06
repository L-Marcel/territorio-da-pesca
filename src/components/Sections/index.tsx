import React from 'react';
import { SimpleContentPage } from '../../config/language/interface';
import { Link } from 'react-router-dom';

interface SectionsProps {
    content: SimpleContentPage;
    withMarginTop?: boolean;
}

const Sections: React.FC<SectionsProps> = ({ content, withMarginTop }) => {
    const Page = content.map(function(item, index){

        let haveMarginTop = withMarginTop;

        if(withMarginTop === undefined && index === 0){
            haveMarginTop = true;
        }

        const marginTop = (!haveMarginTop)? "":"first-item-of-page ";
        const bgColor = (index % 2 === 0)? marginTop:(marginTop + "section-bg");
        switch(item?.type){
            case("Text"):
                return(
                    <section id={item.idName} key={index} className={bgColor}>
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
                    <section id={item.idName} key={index} className={bgColor}>
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
                                                { item.title? <h4>{item.title}</h4>:null }
                                                { item.filter? <p>{item.filter}</p>:null }
                                                <div className="portfolio-links">
                                                    <Link to={item.src} data-gall="contentGallery" className="venobox vbox-item"><i className="bx bx-plus"></i></Link>
                                                    { item.haveLink? <Link to="#" title="More Details"><i className="bx bx-link"></i></Link>:null }
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
            case("TextWithReports"):
                return(
                    <section id={item.idName} key={index} className={bgColor}>
                        <div className="container aos-init aos-animate" data-aos="fade-up">
                            <div className="section-title" style={{ paddingBottom: item.subtitle? "30px":0 }}>
                                <h2>{item.title}</h2>
                                { item.subtitle? <p>{item.subtitle}</p>:null }
                            </div>
                            {item.content.map(function(report, index){
                                    return(
                                        <div key={index} className="section-title">
                                            <h3>{report.title}</h3>
                                            <p>{report.subtitle}</p>
                                        </div>
                                    );
                                })}
                                <div className="row portfolio aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                    { item.images? item.images.map(function(item, index) {
                                        return(
                                            <div className={`col-lg-4 col-md-6 portfolio-item filter-${item.filter}`}>
                                                <div className="portfolio-wrap">
                                                <img src={item.src} className="img-fluid" alt=""/>
                                                <div className="portfolio-info">
                                                    { item.title? <h4>{item.title}</h4>:null }
                                                    { item.filter? <p>{item.filter}</p>:null }
                                                    <div className="portfolio-links">
                                                        <Link to={item.src} data-gall="contentGallery" className="venobox vbox-item"><i className="bx bx-plus"></i></Link>
                                                        { item.haveLink? <Link to="#" title="More Details"><i className="bx bx-link"></i></Link>:null }
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        );
                                    }):null}
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