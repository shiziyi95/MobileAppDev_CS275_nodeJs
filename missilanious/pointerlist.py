from timeit import Timer

class ListPointer:
	def __init__(self):
		self.head = None
		self.cur = None

class Node:		#node for pointer
	def __init__(self):
		self.val = None
		self.next = None

	def __str__(self):
		return str(self.val)

def FIRST(L):
	return L.head

def END(L):
	temp = L.head
	while temp.next: #while next exist
		temp = temp.next
	return temp

def RETRIVE(p, L):
	target = FIRST(L)
	while target:
		if target.next == p:
			return target
		else :
			target = target.next
		return None

def INSERT(v, p, L) :
	n = Node()
	n.val = v #passing in the value to my node here
	if ( p == FIRST(L) and FIRST(L) != END(L) ) or (p == 0 ) :
			n.next = L.head
			L.head = n
			L.cur = L.head
	elif p is None:
		n.next - None
		L.head = n
		L.cur = L.head
	elif L.head is None
		L.head = n
		L.cur = n
	else:# a tyoical situation
		pt = FIRST(L)
		for p in range(p, 0, -1)
			pt = pt.next
		




def MAKENULL():
	temp = ListPointer()
	return temp