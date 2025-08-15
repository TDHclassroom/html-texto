const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Ejercicio 8: Fundamentos de texto - Carpetas, encabezados, párrafos y listas', () => {
    const rootPath = path.join(__dirname, '../../');
    
    describe('Estructura de carpetas', () => {
        test('debe existir la carpeta docs/', () => {
            const docsPath = path.join(rootPath, 'docs');
            expect(fs.existsSync(docsPath)).toBe(true);
            expect(fs.statSync(docsPath).isDirectory()).toBe(true);
        });

        test('debe existir la carpeta docs/images/', () => {
            const imagesPath = path.join(rootPath, 'docs', 'images');
            expect(fs.existsSync(imagesPath)).toBe(true);
            expect(fs.statSync(imagesPath).isDirectory()).toBe(true);
        });

        test('debe existir la carpeta docs/js/', () => {
            const jsPath = path.join(rootPath, 'docs', 'js');
            expect(fs.existsSync(jsPath)).toBe(true);
            expect(fs.statSync(jsPath).isDirectory()).toBe(true);
        });

        test('debe existir la carpeta docs/css/', () => {
            const cssPath = path.join(rootPath, 'docs', 'css');
            expect(fs.existsSync(cssPath)).toBe(true);
            expect(fs.statSync(cssPath).isDirectory()).toBe(true);
        });
    });

    describe('Archivo index.html', () => {
        const indexPath = path.join(rootPath, 'docs', 'index.html');

        test('debe existir el archivo docs/index.html', () => {
            expect(fs.existsSync(indexPath)).toBe(true);
            expect(fs.statSync(indexPath).isFile()).toBe(true);
        });

        test('el archivo index.html debe tener estructura HTML básica', () => {
            expect(fs.existsSync(indexPath)).toBe(true);
            const content = fs.readFileSync(indexPath, 'utf8');
            
            expect(content).toMatch(/<!DOCTYPE\s+html>/i);
            expect(content).toMatch(/<html[^>]*>/i);
            expect(content).toMatch(/<head[^>]*>/i);
            expect(content).toMatch(/<\/head>/i);
            expect(content).toMatch(/<body[^>]*>/i);
            expect(content).toMatch(/<\/body>/i);
            expect(content).toMatch(/<\/html>/i);
        });

        test('el archivo index.html debe tener título', () => {
            if (fs.existsSync(indexPath)) {
                const content = fs.readFileSync(indexPath, 'utf8');
                expect(content).toMatch(/<title[^>]*>.*<\/title>/i);
            } else {
                expect(fs.existsSync(indexPath)).toBe(true);
            }
        });
    });

    describe('Elementos de texto en index.html', () => {
        const indexPath = path.join(rootPath, 'docs', 'index.html');

        test('debe contener al menos un encabezado (h1, h2, h3, h4, h5, o h6)', () => {
            if (fs.existsSync(indexPath)) {
                const content = fs.readFileSync(indexPath, 'utf8');
                const dom = new JSDOM(content);
                const document = dom.window.document;
                
                const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
                expect(headings.length).toBeGreaterThanOrEqual(1);
            } else {
                expect(fs.existsSync(indexPath)).toBe(true);
            }
        });

        test('debe contener al menos un párrafo', () => {
            if (fs.existsSync(indexPath)) {
                const content = fs.readFileSync(indexPath, 'utf8');
                const dom = new JSDOM(content);
                const document = dom.window.document;
                
                const paragraphs = document.querySelectorAll('p');
                expect(paragraphs.length).toBeGreaterThanOrEqual(1);
            } else {
                expect(fs.existsSync(indexPath)).toBe(true);
            }
        });

        test('debe contener al menos una lista (ul o ol)', () => {
            if (fs.existsSync(indexPath)) {
                const content = fs.readFileSync(indexPath, 'utf8');
                const dom = new JSDOM(content);
                const document = dom.window.document;
                
                const lists = document.querySelectorAll('ul, ol');
                expect(lists.length).toBeGreaterThanOrEqual(1);
            } else {
                expect(fs.existsSync(indexPath)).toBe(true);
            }
        });

        test('las listas deben contener elementos de lista (li)', () => {
            if (fs.existsSync(indexPath)) {
                const content = fs.readFileSync(indexPath, 'utf8');
                const dom = new JSDOM(content);
                const document = dom.window.document;
                
                const listItems = document.querySelectorAll('li');
                expect(listItems.length).toBeGreaterThanOrEqual(1);
            } else {
                expect(fs.existsSync(indexPath)).toBe(true);
            }
        });

        test('los elementos de lista deben tener contenido', () => {
            if (fs.existsSync(indexPath)) {
                const content = fs.readFileSync(indexPath, 'utf8');
                const dom = new JSDOM(content);
                const document = dom.window.document;
                
                const listItems = document.querySelectorAll('li');
                if (listItems.length > 0) {
                    const hasContent = Array.from(listItems).some(li => li.textContent.trim().length > 0);
                    expect(hasContent).toBe(true);
                }
            } else {
                expect(fs.existsSync(indexPath)).toBe(true);
            }
        });

        test('los párrafos deben tener contenido', () => {
            if (fs.existsSync(indexPath)) {
                const content = fs.readFileSync(indexPath, 'utf8');
                const dom = new JSDOM(content);
                const document = dom.window.document;
                
                const paragraphs = document.querySelectorAll('p');
                if (paragraphs.length > 0) {
                    const hasContent = Array.from(paragraphs).some(p => p.textContent.trim().length > 0);
                    expect(hasContent).toBe(true);
                }
            } else {
                expect(fs.existsSync(indexPath)).toBe(true);
            }
        });

        test('los encabezados deben tener contenido', () => {
            if (fs.existsSync(indexPath)) {
                const content = fs.readFileSync(indexPath, 'utf8');
                const dom = new JSDOM(content);
                const document = dom.window.document;
                
                const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
                if (headings.length > 0) {
                    const hasContent = Array.from(headings).some(h => h.textContent.trim().length > 0);
                    expect(hasContent).toBe(true);
                }
            } else {
                expect(fs.existsSync(indexPath)).toBe(true);
            }
        });
    });
});