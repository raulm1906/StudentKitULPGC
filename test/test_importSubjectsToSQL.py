import unittest
import json

class TestJsonDeserialize(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        with open("../src/scrappers/subjects.json", 'r', encoding='utf-8') as subjectsJson:
            cls.subjectsList = json.load(subjectsJson)

    def test_subject_name(self):
        self.assertEqual(deserializeSubject(self.subjectsList[0])["name"], "ÁLGEBRA Y GEOMETRÍA")
        self.assertEqual(deserializeSubject(self.subjectsList[-1])["name"], "PRÁCTICAS EXTERNAS")
        self.assertEqual(deserializeSubject(self.subjectsList[3])["name"], "FUNDAMENTOS DE COMPUTADORES")



# class TestSQLInsertString(unittest.TestCase):



if __name__ == '__main__':
    unittest.main()
