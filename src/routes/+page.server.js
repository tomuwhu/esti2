import Database from 'better-sqlite3'
const db = new Database('foobar.db', {})
db.pragma('journal_mode = WAL')

export const load = () => {
    db.serialize(() => {
        
    })
    return {
        title: 'Home'
    }
}