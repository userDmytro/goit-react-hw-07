import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import {
  selectContacts,
  selectError,
  selectLoading,
} from "../../redux/contactsSlice";
import Loader from "../Loader/Loader";
import ErrorMsg from "../ErrorMsg/ErrorMsg";

export default function App() {
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {contacts.length > 0 && <ContactList />}
      {isError && <ErrorMsg />}
    </div>
  );
}
