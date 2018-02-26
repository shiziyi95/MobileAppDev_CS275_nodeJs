class class_a:
	def __init__(self):
		self.a = 1

class class_b:
	def __init__(self, other_data):
		self.data = 3
		other_data.a = self


########
x = class_b(a,)

print x.a