const express = require("express");
const multer = require("multer");
const fs = require("fs");
const PDFParser = require("pdf2json");
const cors = require("cors");

const app = express();
const port = 3000;

// Habilita CORS para aceitar requisições de qualquer origem
app.use(cors({
    origin: "*",  // Aceita todas as origens
}));

// Configuração do multer para armazenar arquivos temporariamente
const upload = multer({ dest: "uploads/" });

// Rota para receber o arquivo PDF e processá-lo
app.post("/extract", upload.single("file"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "Nenhum arquivo enviado." });
    }

    const filePath = req.file.path;
    const pdfParser = new PDFParser();

    pdfParser.on("pdfParser_dataError", err => {
        fs.unlinkSync(filePath);
        res.status(500).json({ error: "Erro ao processar PDF", details: err.message });
    });

    pdfParser.on("pdfParser_dataReady", pdfData => {
        fs.unlinkSync(filePath); // Remove o arquivo após o processamento
        res.json(pdfData);
    });

    pdfParser.loadPDF(filePath);
});

app.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});
