import React from 'react';
import App from '@/Layouts/App';
import { Head } from '@inertiajs/inertia-react';
import Header from '@/Components/Header';
import Container from '@/Components/Container';
import Grid from '@/Components/Grid';
import ArticleBlock from '@/Components/ArticleBlock';
import Pagination from '@/Components/Pagination';

export default function Show({ category, ...props }) {
    const { data: articles, meta, links } = props.articles;
    return (
        <div>
            <Head title={category.name} />
            <Header>
                <Header.Title>{category.name}</Header.Title>
                <Header.Subtitle>
                    This page will show you about {category.name}
                </Header.Subtitle>
            </Header>

            <Container>
                {articles.length ? (
                    <>
                        <Grid className='items-start'>
                            {articles.map((article) => (
                                <ArticleBlock
                                    article={article}
                                    key={article.slug}
                                />
                            ))}
                        </Grid>
                        <Pagination {...{ meta, links }} />
                    </>
                ) : (
                    <p>No articles yet.</p>
                )}
            </Container>
        </div>
    );
}

Show.layout = (page) => <App children={page} />;
