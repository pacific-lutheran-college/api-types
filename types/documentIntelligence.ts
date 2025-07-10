interface DocumentAnalysisResult {
  status: string;
  createdDateTime: string;
  lastUpdatedDateTime: string;
  analyzeResult: AnalyzeResult;
}

interface AnalyzeResult {
  apiVersion: string;
  modelId: string;
  stringIndexType: string;
  content: string;
  pages: Page[];
  tables: Table[];
  paragraphs: Paragraph[];
  styles: any[];
}

interface Page {
  pageNumber: number;
  angle: number;
  width: number;
  height: number;
  unit: string;
  words: Word[];
  lines: Line[];
  spans: Span[];
}

interface Word {
  content: string;
  polygon: number[];
  confidence: number;
  span: Span;
}

interface Span {
  offset: number;
  length: number;
}

interface Line {
  content: string;
  polygon: number[];
  spans: Span[];
}

interface Table {
  rowCount: number;
  columnCount: number;
  cells: Cell[];
  boundingRegions: BoundingRegion[];
  spans: Span[];
}

interface Cell {
  kind?: string;
  rowIndex: number;
  columnIndex: number;
  content: string;
  boundingRegions: BoundingRegion[];
  spans: Span[];
  columnSpan?: number;
}

interface BoundingRegion {
  pageNumber: number;
  polygon: number[];
}

interface Paragraph {
  spans: Span[];
  boundingRegions: BoundingRegion[];
  content: string;
  role?: string;
}

export { DocumentAnalysisResult, Table };
