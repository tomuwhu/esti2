import Database from 'better-sqlite3'
const db = new Database('foobar.db', {})
db.pragma('journal_mode = WAL')

export const load = () => {
    let x = db.prepare(`
        SELECT * FROM x1
      `).all()
    return {
        title: x
    }
}