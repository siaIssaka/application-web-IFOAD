import tkinter as tk
from tkinter import messagebox


class TemperatureConverter:
    def __init__(self, fenetre):
        self.fenetre = fenetre
        self.fenetre.title("Conversion de Température")
        self.fenetre.geometry("500x380")
        self.fenetre.resizable(True, True)
        self.fenetre.configure(bg="#f0f4f8")

        # Titre
        self.title_label = tk.Label(
            self.fenetre,
            text="Convertisseur de Température en degré et en celcius",
            font=("Arial", 13, "bold"),
            bg="#f0f4f8",
            fg="#2c3e50"
        )
        self.title_label.pack(pady=12)

        # Étiquette d'instruction
        self.instruction_label = tk.Label(
            self.fenetre,
            text="Entrez une valeur numérique :",
            font=("Arial", 10),
            bg="#f0f4f8",
            fg="#7f8c8d"
        )
        self.instruction_label.pack(pady=4)

        # Champ de saisie
        self.temp_entry = tk.Entry(
            self.fenetre,
            width=22,
            font=("Arial", 11),
            justify="center"
        )
        self.temp_entry.pack(pady=6)
        self.temp_entry.insert(0, "Entrer la température")
        self.temp_entry.bind("<FocusIn>", self.clear_placeholder)

        # Menu déroulant pour choisir la conversion
        self.conversion_var = tk.StringVar(value="Celsius → Fahrenheit")
        self.option_menu = tk.OptionMenu(
            self.fenetre,
            self.conversion_var,
            "Celsius → Fahrenheit",
            "Fahrenheit → Celsius"
        )
        self.option_menu.config(font=("Arial", 10, "bold"), bg="#bdc3c7", width=22)
        self.option_menu.pack(pady=8)

        # Bouton de conversion
        self.convert_btn = tk.Button(
            self.fenetre,
            text="Convertir",
            font=("Arial", 10, "bold"),
            bg="#3498db",
            fg="white",
            activebackground="#2980b9",
            width=22,
            command=self.convert_temperature
        )
        self.convert_btn.pack(pady=8)

        # Label résultat
        self.result_label = tk.Label(
            self.fenetre,
            text="Résultat : ",
            font=("Arial", 11, "bold"),
            bg="#f0f4f8",
            fg="#34495e",
            width=30,
            height=2
        )
        self.result_label.pack(pady=12)

        # Footer
        self.footer_label = tk.Label(
            self.fenetre,
            text="Application réalisée avec Tkinter",
            font=("Arial", 9, "italic"),
            bg="#f0f4f8",
            fg="#95a5a6"
        )
        self.footer_label.pack(side="bottom", pady=8)

    def clear_placeholder(self, event):
        if self.temp_entry.get() == "Entrer la température":
            self.temp_entry.delete(0, tk.END)

    def convert_temperature(self):
        try:
            valeur = float(self.temp_entry.get())
            choix = self.conversion_var.get()

            if choix == "Celsius → Fahrenheit":
                resultat = (valeur * 9 / 5) + 32
                self.result_label.config(
                    text=f"Résultat : {resultat:.2f} °F",
                    fg="white",
                    bg="#1abc9c"
                )
            else:
                resultat = (valeur - 32) * 5 / 9
                self.result_label.config(
                    text=f"Résultat : {resultat:.2f} °C",
                    fg="white",
                    bg="#27ae60"
                )
        except ValueError:
            messagebox.showerror("Erreur", "Veuillez entrer un nombre valide")


# Lancement de l'application
if __name__ == "__main__":
    fenetre = tk.Tk()
    app = TemperatureConverter(fenetre)
    fenetre.mainloop()
