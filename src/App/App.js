import t from './App.module.css'
import ContactForm from '../Components/ContactForm/ContactForm'
import ContactList from '../Components/ContactList/ContactList'
import Filter from '../Components/Filter/Filter'

function App() {
  return (
    <div className={t.App}>
      <h1 className={t.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={t.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  )
}

export default App
