import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

const url =
"https://cors-anywhere.herokuapp.com/https://writing.colostate.edu/guides/documents/resume/functionalsample.pdf"

export default function Test() {
	
	pdfjs.GlobalWorkerOptions.workerSrc =
	`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
	const [pageNumber] = useState(1);
	
	return (
		<div className="main">
			<Document file={url} >
				<Page pageNumber={pageNumber} />
			</Document>
	    </div>
	);
}