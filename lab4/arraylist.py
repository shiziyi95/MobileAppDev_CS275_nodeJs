class arrayList:
	def __init__(self) :
		self.data = [none] * MAXL
		self.end = 0

def FIRST(L):
	if L.end is 0 :
		return -1
	else :
		return 0
		
def END(L):
	return L.end 

def RETRIVE(p,L):
	if p > L.end :# if the postion is beyound end point
		return none
	else :
		return L.data[p]

def LOCATE(val, L):
	for i in range(L.end):
		if L.data[i] == val:
			return i

def NEXT(p, L):
	if p > L.end or p + 1 > L.end:
		return None
	else :
		return p + 1

def PREVIOUS(p, L):
	if p > L.end or p == 0:
		return None
	else :
		return p - 1

def INSERT(val, p, L):
	if p > L.end:
		return 
	elif p == L.end:
		L.data[p] = val
	else :
		L.data[P+1:L.end+1] = L.data[p:L.end]#everyting push back one space
		L.data[p] = val
	L.data = L.data[:MAXL]
	L.end += 1
def DELETE(p, L):
	if p == L.end:
		L.end -= 1
	else:
		L.data[p:L.end-1] = L.data[p+1:L.end]
		L.end -= 1


def MAKENULL():
	return arrayList()

def PRINTLIST(L):
	print L.data[0:L.end]


MAXL= 256

alf = MAKENULL()

INSERT(i, 0, alf)

PRINTLIST(alf)

INSERT(3, END(alf),alf)

PRINTLIST(alf)

INSERT(88, 4, alf)
PRINTLIST(alf)

DELETE(3,alf)
PRINTLEST(alf)

p = FIRST(alf)
p = NEXT(p,alf)
print "second postion: ", RETRIVE(p, alf)
