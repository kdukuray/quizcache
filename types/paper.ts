export interface Paper {
  id?: number, // optional because locally created paper objects have no id until they are uploaded
  school: string;
  subject: string;
  year: number | string;
  courseCode?: string;
  semester?: string;
  professor?: string,
  pdfFile?: string;
}

export interface PaperDetailsPageParams{
  params: {
    paperId: string
  }
  
}