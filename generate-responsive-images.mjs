/**
 * Generate responsive image variants using Sharp
 * Run: node generate-responsive-images.mjs
 */

import sharp from 'sharp';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const STATIC_DIR = path.join(__dirname, 'static/images');

// Image configurations
const configs = [
    {
        source: 'psicologa-danielle-gurgel-higienopolis-sp.avif',
        outputs: [
            { width: 450, suffix: '-450w', formats: ['avif', 'webp'] },
            { width: 800, suffix: '-800w', formats: ['avif', 'webp'] },
            { width: 1200, suffix: '-1200w', formats: ['avif', 'webp'] },
        ]
    },
    {
        source: 'consultorio-psicologia-higienopolis-sp-01.avif',
        outputs: [
            { width: 400, suffix: '-400w', formats: ['avif', 'webp'] },
            { width: 800, suffix: '-800w', formats: ['avif', 'webp'] },
        ]
    },
    {
        source: 'consultorio-psicologia-higienopolis-sp-02.avif',
        outputs: [
            { width: 400, suffix: '-400w', formats: ['avif', 'webp'] },
            { width: 800, suffix: '-800w', formats: ['avif', 'webp'] },
        ]
    },
    {
        source: 'psicologa-danielle-gurgel-lendo-livro.avif',
        outputs: [
            { width: 400, suffix: '-400w', formats: ['avif', 'webp'] },
            { width: 800, suffix: '-800w', formats: ['avif', 'webp'] },
        ]
    },
    {
        source: 'psicologa-danielle-gurgel-sobre.avif',
        outputs: [
            { width: 400, suffix: '-400w', formats: ['avif', 'webp'] },
            { width: 800, suffix: '-800w', formats: ['avif', 'webp'] },
        ]
    },
    {
        source: 'psicologa-danielle-gurgel-consultorio.avif',
        outputs: [
            { width: 400, suffix: '-400w', formats: ['avif', 'webp'] },
            { width: 800, suffix: '-800w', formats: ['avif', 'webp'] },
        ]
    }
];

async function generateImages() {
    console.log('🖼️  Starting responsive image generation...\n');

    for (const config of configs) {
        const sourcePath = path.join(STATIC_DIR, config.source);

        if (!existsSync(sourcePath)) {
            console.log(`⚠️  Source not found: ${config.source}`);
            continue;
        }

        const dir = path.dirname(sourcePath);
        const baseName = path.basename(config.source, path.extname(config.source));

        for (const output of config.outputs) {
            const image = sharp(sourcePath);
            const resized = image.resize(output.width, null, {
                withoutEnlargement: true,
                fit: 'inside'
            });

            for (const format of output.formats) {
                const outputName = `${baseName}${output.suffix}.${format}`;
                const outputPath = path.join(dir, outputName);

                try {
                    if (format === 'avif') {
                        await resized.clone().avif({ quality: 80 }).toFile(outputPath);
                    } else if (format === 'webp') {
                        await resized.clone().webp({ quality: 85 }).toFile(outputPath);
                    }
                    console.log(`✅ Generated: ${path.relative(STATIC_DIR, outputPath)}`);
                } catch (err) {
                    console.log(`❌ Error generating ${outputName}: ${err.message}`);
                }
            }
        }
    }

    console.log('\n🎉 Image generation complete!');
}

generateImages().catch(console.error);
