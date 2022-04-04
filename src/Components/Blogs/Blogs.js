import './Blogs.css';
import React from 'react'

const Blogs = () => {
    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-3xl lg:text-5xl text-center'>Questions And Answers</h1>
            <div>
                <div>
                    <h3 className='text-4xl my-2'>What is Context api?</h3>
                    <p>With props, we can share data from the parent component to the child component. But there is a problem with sharing data with props. If there are many layer of components, then we need to share data every child component to share data for the required component. This is problem of sharing data. But with context api we can share data directly from the parent component to the child component. This is alternative of "props drilling".</p>
                </div>
                <div>
                    <h3 className='text-4xl my-2'>What is semantic tag?</h3>
                    <p>
                        Tag is used in the HTML language. But In the advance technology, they upgraded themselves. HTML provides semantic tag. Now what is semantic tag. Semantic tag declare what the content about. Semantic tag make it clear to the browser what the meaning of a page and it's content is. That clarity is also communicated with search engines, ensuring that the right pages are delivered for the right queries.
                    </p>
                </div>
                <div>
                    <h3 className='text-4xl my-2'>Difference between inline, block, and inline-block element?</h3>
                    <p>
                        <strong>Inline</strong>
                        Inline element appear in a line. It doesn't start with the new line. We can't set width or height for inline element. It take only the content height and width.
                        <br />
                        <strong>Block</strong>
                        Block element start with the new line. Like it block a line no matter how much length it is. If there is only one letter it will block the whole line. By default it gives some margin.
                        <br />
                        <strong>Inline-block</strong>
                        Inline-block element is the mixed up of the inline element and the block element. For inline-block element we can set height and width like a block element. But It doesn't take the full width. It takes element one after another.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Blogs