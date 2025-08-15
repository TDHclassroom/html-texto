const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Ejercicio 9: Fundamentos de texto 2 - Listas anidadas, cursiva, negrita, subrayado', () => {
    const rootPath = path.join(__dirname, '../../');
    
    describe('Estructura de carpetas (prerequisito del ejercicio 8)', () => {
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

    describe('Archivos HTML requeridos', () => {
        test('debe existir el archivo docs/index.html', () => {
            const indexPath = path.join(rootPath, 'docs', 'index.html');
            expect(fs.existsSync(indexPath)).toBe(true);
            expect(fs.statSync(indexPath).isFile()).toBe(true);
        });

        test('debe existir el archivo docs/servicios.html', () => {
            const serviciosPath = path.join(rootPath, 'docs', 'servicios.html');
            expect(fs.existsSync(serviciosPath)).toBe(true);
            expect(fs.statSync(serviciosPath).isFile()).toBe(true);
        });
    });

    describe('Estructura HTML básica de servicios.html', () => {
        const serviciosPath = path.join(rootPath, 'docs', 'servicios.html');

        test('el archivo servicios.html debe tener estructura HTML básica', () => {
            if (fs.existsSync(serviciosPath)) {
                const content = fs.readFileSync(serviciosPath, 'utf8');
                
                expect(content).toMatch(/<!DOCTYPE\s+html>/i);
                expect(content).toMatch(/<html[^>]*>/i);
                expect(content).toMatch(/<head[^>]*>/i);
                expect(content).toMatch(/<\/head>/i);
                expect(content).toMatch(/<body[^>]*>/i);
                expect(content).toMatch(/<\/body>/i);
                expect(content).toMatch(/<\/html>/i);
            } else {
                expect(fs.existsSync(serviciosPath)).toBe(true);
            }
        });

        test('el archivo servicios.html debe tener título', () => {
            if (fs.existsSync(serviciosPath)) {
                const content = fs.readFileSync(serviciosPath, 'utf8');
                expect(content).toMatch(/<title[^>]*>.*<\/title>/i);
            } else {
                expect(fs.existsSync(serviciosPath)).toBe(true);
            }
        });
    });

    describe('Encabezados en servicios.html', () => {
        const serviciosPath = path.join(rootPath, 'docs', 'servicios.html');

        test('debe contener un encabezado h1 con "Documentación del Proyecto"', () => {
            if (fs.existsSync(serviciosPath)) {
                const content = fs.readFileSync(serviciosPath, 'utf8');
                const dom = new JSDOM(content);
                const document = dom.window.document;
                
                const h1 = document.querySelector('h1');
                expect(h1).toBeTruthy();
                expect(h1.textContent.trim()).toContain('Documentación del Proyecto');
            } else {
                expect(fs.existsSync(serviciosPath)).toBe(true);
            }
        });

        test('debe contener un encabezado h2 con "Secciones Principales"', () => {
            if (fs.existsSync(serviciosPath)) {
                const content = fs.readFileSync(serviciosPath, 'utf8');
                const dom = new JSDOM(content);
                const document = dom.window.document;
                
                const h2 = document.querySelector('h2');
                expect(h2).toBeTruthy();
                expect(h2.textContent.trim()).toContain('Secciones Principales');
            } else {
                expect(fs.existsSync(serviciosPath)).toBe(true);
            }
        });

        test('debe contener un encabezado h3 con "Información Adicional"', () => {
            if (fs.existsSync(serviciosPath)) {
                const content = fs.readFileSync(serviciosPath, 'utf8');
                const dom = new JSDOM(content);
                const document = dom.window.document;
                
                const h3 = document.querySelector('h3');
                expect(h3).toBeTruthy();
                expect(h3.textContent.trim()).toContain('Información Adicional');
            } else {
                expect(fs.existsSync(serviciosPath)).toBe(true);
            }
        });
    });

    describe('Elementos de formato de texto en servicios.html', () => {
        const serviciosPath = path.join(rootPath, 'docs', 'servicios.html');

        test('debe contener elementos en negrita (strong o b)', () => {
            if (fs.existsSync(serviciosPath)) {
                const content = fs.readFileSync(serviciosPath, 'utf8');
                const dom = new JSDOM(content);
                const document = dom.window.document;
                
                const boldElements = document.querySelectorAll('strong, b');
                expect(boldElements.length).toBeGreaterThanOrEqual(1);
            } else {
                expect(fs.existsSync(serviciosPath)).toBe(true);
            }
        });

        test('debe contener elementos en cursiva (em o i)', () => {
            if (fs.existsSync(serviciosPath)) {
                const content = fs.readFileSync(serviciosPath, 'utf8');
                const dom = new JSDOM(content);
                const document = dom.window.document;
                
                const italicElements = document.querySelectorAll('em, i');
                expect(italicElements.length).toBeGreaterThanOrEqual(1);
            } else {
                expect(fs.existsSync(serviciosPath)).toBe(true);
            }
        });

        test('debe contener elementos subrayados (u o ins)', () => {
            if (fs.existsSync(serviciosPath)) {
                const content = fs.readFileSync(serviciosPath, 'utf8');
                const dom = new JSDOM(content);
                const document = dom.window.document;
                
                const underlineElements = document.querySelectorAll('u, ins');
                expect(underlineElements.length).toBeGreaterThanOrEqual(1);
            } else {
                expect(fs.existsSync(serviciosPath)).toBe(true);
            }
        });

        test('debe contener un párrafo con elementos de formato mixto', () => {
            if (fs.existsSync(serviciosPath)) {
                const content = fs.readFileSync(serviciosPath, 'utf8');
                const dom = new JSDOM(content);
                const document = dom.window.document;
                
                const paragraphs = document.querySelectorAll('p');
                expect(paragraphs.length).toBeGreaterThanOrEqual(1);
                
                // Verificar que al menos un párrafo contiene elementos de formato
                let hasFormattedParagraph = false;
                paragraphs.forEach(p => {
                    const hasFormatting = p.querySelector('strong, b, em, i, u, ins');
                    if (hasFormatting) hasFormattedParagraph = true;
                });
                expect(hasFormattedParagraph).toBe(true);
            } else {
                expect(fs.existsSync(serviciosPath)).toBe(true);
            }
        });
    });

    describe('Lista ordenada con elementos específicos en servicios.html', () => {
        const serviciosPath = path.join(rootPath, 'docs', 'servicios.html');

        test('debe contener una lista ordenada (ol)', () => {
            if (fs.existsSync(serviciosPath)) {
                const content = fs.readFileSync(serviciosPath, 'utf8');
                const dom = new JSDOM(content);
                const document = dom.window.document;
                
                const orderedLists = document.querySelectorAll('ol');
                expect(orderedLists.length).toBeGreaterThanOrEqual(1);
            } else {
                expect(fs.existsSync(serviciosPath)).toBe(true);
            }
        });

        test('la lista ordenada debe contener los elementos requeridos', () => {
            if (fs.existsSync(serviciosPath)) {
                const content = fs.readFileSync(serviciosPath, 'utf8');
                const dom = new JSDOM(content);
                const document = dom.window.document;
                
                const orderedList = document.querySelector('ol');
                expect(orderedList).toBeTruthy();
                
                const listItems = orderedList.querySelectorAll('li');
                expect(listItems.length).toBeGreaterThanOrEqual(5);
                
                const itemTexts = Array.from(listItems).map(li => li.textContent.toLowerCase());
                expect(itemTexts.some(text => text.includes('introducción'))).toBe(true);
                expect(itemTexts.some(text => text.includes('instalación'))).toBe(true);
                expect(itemTexts.some(text => text.includes('uso'))).toBe(true);
                expect(itemTexts.some(text => text.includes('contribución'))).toBe(true);
                expect(itemTexts.some(text => text.includes('licencia'))).toBe(true);
            } else {
                expect(fs.existsSync(serviciosPath)).toBe(true);
            }
        });

        test('debe contener una sublista dentro del elemento "Uso"', () => {
            if (fs.existsSync(serviciosPath)) {
                const content = fs.readFileSync(serviciosPath, 'utf8');
                const dom = new JSDOM(content);
                const document = dom.window.document;
                
                const orderedList = document.querySelector('ol');
                const listItems = orderedList.querySelectorAll('li');
                
                let hasNestedList = false;
                listItems.forEach(li => {
                    if (li.textContent.toLowerCase().includes('uso')) {
                        const nestedList = li.querySelector('ul');
                        if (nestedList) {
                            const nestedItems = nestedList.querySelectorAll('li');
                            const nestedTexts = Array.from(nestedItems).map(item => item.textContent.toLowerCase());
                            
                            const hasRequiredItems = 
                                nestedTexts.some(text => text.includes('comandos básicos')) &&
                                nestedTexts.some(text => text.includes('opciones avanzadas')) &&
                                nestedTexts.some(text => text.includes('ejemplos prácticos'));
                            
                            if (hasRequiredItems) hasNestedList = true;
                        }
                    }
                });
                
                expect(hasNestedList).toBe(true);
            } else {
                expect(fs.existsSync(serviciosPath)).toBe(true);
            }
        });
    });

    describe('Lista desordenada con sublistas anidadas en servicios.html', () => {
        const serviciosPath = path.join(rootPath, 'docs', 'servicios.html');

        test('debe contener una lista desordenada (ul)', () => {
            if (fs.existsSync(serviciosPath)) {
                const content = fs.readFileSync(serviciosPath, 'utf8');
                const dom = new JSDOM(content);
                const document = dom.window.document;
                
                const unorderedLists = document.querySelectorAll('ul');
                expect(unorderedLists.length).toBeGreaterThanOrEqual(1);
            } else {
                expect(fs.existsSync(serviciosPath)).toBe(true);
            }
        });

        test('la lista desordenada debe contener elementos con sublistas', () => {
            if (fs.existsSync(serviciosPath)) {
                const content = fs.readFileSync(serviciosPath, 'utf8');
                const dom = new JSDOM(content);
                const document = dom.window.document;
                
                // Buscar la lista desordenada principal (no anidada dentro de ol)
                const mainUnorderedLists = Array.from(document.querySelectorAll('ul')).filter(ul => {
                    return !ul.closest('ol');
                });
                
                expect(mainUnorderedLists.length).toBeGreaterThanOrEqual(1);
                
                const mainList = mainUnorderedLists[0];
                const mainItems = Array.from(mainList.children).filter(child => child.tagName.toLowerCase() === 'li');
                
                // Verificar que hay elementos principales
                expect(mainItems.length).toBeGreaterThanOrEqual(3);
                
                // Verificar que al menos algunos elementos tienen sublistas
                let hasNestedSublist = false;
                mainItems.forEach(li => {
                    const nestedUl = li.querySelector('ul');
                    if (nestedUl && nestedUl.querySelectorAll('li').length > 0) {
                        hasNestedSublist = true;
                    }
                });
                
                expect(hasNestedSublist).toBe(true);
            } else {
                expect(fs.existsSync(serviciosPath)).toBe(true);
            }
        });

        test('debe contener los elementos requeridos con formato', () => {
            if (fs.existsSync(serviciosPath)) {
                const content = fs.readFileSync(serviciosPath, 'utf8');
                const dom = new JSDOM(content);
                const document = dom.window.document;
                
                const mainUnorderedLists = Array.from(document.querySelectorAll('ul')).filter(ul => {
                    return !ul.closest('ol');
                });
                
                const mainList = mainUnorderedLists[0];
                const mainItems = Array.from(mainList.children).filter(child => child.tagName.toLowerCase() === 'li');
                
                const itemTexts = mainItems.map(li => li.textContent.toLowerCase());
                expect(itemTexts.some(text => text.includes('requisitos previos'))).toBe(true);
                expect(itemTexts.some(text => text.includes('dependencias'))).toBe(true);
                expect(itemTexts.some(text => text.includes('contacto'))).toBe(true);
            } else {
                expect(fs.existsSync(serviciosPath)).toBe(true);
            }
        });
    });
});
