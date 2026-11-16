import assert from "node:assert/strict"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import test from "node:test"
import { getIdentitySections, getIdentitySection } from "../lib/identity.ts"

test("identity dates remain text after YAML parsing", () => {
    const cwd = process.cwd()
    const fixture = fs.mkdtempSync(path.join(os.tmpdir(), "pai-identity-"))
    const dir = path.join(fixture, "data/identity")
    fs.mkdirSync(dir, { recursive: true })
    try {
        process.chdir(fixture)
        for (const [id, date, expected] of [
            ["about", "updated: 2026-11-16", "2026-11-16"],
            ["mission", 'updated: "2026-11-15"', "2026-11-15"],
            ["goals", "", "Unknown"],
        ]) {
            fs.writeFileSync(path.join(dir, `${id}.md`),
                `---\ntitle: ${id}\n${date}\n---\nExample context.\n`)
            assert.equal(getIdentitySection(id)?.updated, expected)
        }
        assert.deepEqual(getIdentitySections().map(section => section.updated),
            ["2026-11-16", "2026-11-15", "Unknown"])
    } finally {
        process.chdir(cwd)
        fs.rmSync(fixture, { recursive: true, force: true })
    }
})
