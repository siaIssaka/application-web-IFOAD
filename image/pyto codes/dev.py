import math

"""n =(input("entrer un suite de nombre :"))

List =list(map(int, n.split()))
print (List)
pairs=[]
impairs=[]
for n in List:
    if n % 2==0:
        pairs.append(n)
    else:impairs.append(n)

pairs.sort(reverse=True)
impairs.sort()

print(f"les nombres paires sont : {pairs}")
print(f"les nombres impaires sont : {impairs}")


somme=0
for n in List:
    somme+=n
    print(f" la somme est {somme}")"""

def calculer_moyenne(liste_notes):
    if not liste_notes:
        raise ValueError("la liste est vide")
    somme=0
    nb_elements=0
    for note in liste_notes:
        try:

            somme +=float(note)
            nb_elements += 1
        except (ValueError, TypeError):
            continue
if compter==0:
    print("")

