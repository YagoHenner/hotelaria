import MenuLateral from "../../../components/MenuLateral";
import styles from "./.module.css";
import PageTemplate from "../../../components/PageTemplate";

export default function HomeUsuario() {
  return (
    <div>
      <MenuLateral />
      <PageTemplate title={""}>
        <div>Nova página</div>
      </PageTemplate>
    </div>
  );
}