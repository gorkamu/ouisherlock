import React from 'react';
import { Logo } from './Logo';
import { Form } from './Form';
import { ResultsContainer } from './ResultsContainer';
import MetaTags from 'react-meta-tags';
import seo from '../../data/seo.json'

export const Container = () => {
    return (
        <div className="container">
            <MetaTags>
                <title>{`▷ ${seo.title} - ${seo.claim}`}</title>
                <meta name="description" content={ seo.description }/>
                <link rel="canonical" href={`https://${seo.hostname}/`}>

                </link>
                <meta property="og:title" content={ `▷ ${seo.title} - ${seo.claim}` }/>
                <meta property="og:image" content={`https://${seo.hostname}/ouisherlock.png`}/>
                
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content={ seo.author }/>
                <meta name="twitter:creator" content={ seo.author }/>

                <meta property="og:url" content={ `https://${seo.hostname}/` }/>
                <meta property="og:type" content="article"/>
                <meta property="article:published_time" content="2022-12-17"/>
                <meta property="article:author" content={ seo.author }/>
                <meta property="og:title" content={`▷ ${seo.title} - ${seo.claim}`} />
                <meta property="og:description" content={seo.description}/>
                <meta property="og:image" content={`https://${seo.hostname}/ouisherlock.png`}/>
                <meta property="og:image:alt" content={ `▷ ${seo.title} - ${seo.claim}` }/>
                <meta property="og:image:width" content="1200"/>
                <meta property="og:image:height" content="630"/>
                <meta property="author" name="author" content={ seo.author }/>
                <meta property="copyright" name="copyright" content={ seo.author }/>
                <meta property="publisher" name="publisher" content={ seo.author }/>
                <meta property="keywords" name="keywords" content={ seo.keywords }/>
                <meta property="content-language" name="content-language" content={ seo.contentLanguage }/>
            </MetaTags>
            <div className="py-5 text-center">
                <Logo />
                <h1>Oui Sherlock</h1>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <p>Hunt down social media accounts by username across <u>more than 200</u> social networks</p>
                        <p>This project is based on <a href="https://github.com/sherlock-project/sherlock" title="sherlock" target="_blank" rel="noopener noreferrer">this one</a></p>
                        <p>Happily implemented by <a href="https://okboomer.sh" title="okboomer" target="_blank" rel="noopener noreferrer">@okboomer</a></p>
                    </div>
                </div> 
                <Form />
                <ResultsContainer />
            </div>
        </div>
    )
}
